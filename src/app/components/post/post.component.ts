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
        this.postId = parseInt(this.route.snapshot.params.id);
        this.postService.getById(this.postId).then(post => {
            this.post = post;
            console.log(post);
        });
     }

    ngOnDestroy() {
    }
}