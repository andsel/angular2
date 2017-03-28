import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service'

@Component({
    templateUrl: "./post.component.html",
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

    postId;
    sub;
    post;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.postId = parseInt(params['id']);
            this.post = this.postService.getById(this.postId);
        });
     }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}