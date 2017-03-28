import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'

@Component({
    templateUrl: "./postlist.component.html",
    styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
    data: Array<any>;

    constructor (private postService: PostService) {}

    ngOnInit() {
        this.data = this.postService.getAll();
    }
}