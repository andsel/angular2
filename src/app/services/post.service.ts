import { Injectable } from '@angular/core';

const FAKE_DATA = [
    {
        id: 1,
        pic: "https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/huracan.png",
        content: "Contenuto stupido"
    },
    {
        id: 2,
        pic: "http://www.ducati.com/cms-web/upl/img/bikes/2017/SuperSport/Model-Page_2016_Supersport-S_W_01_960x420.jpg",
        content: "Contenuto stupidisismo"
    },
    {
        id: 3,
        pic: "http://content.worldcarfans.co/2014/6/9/super/14034460261229035177.jpg",
        content: "Contenuto furbo"
    },];

@Injectable()
export class PostService {

    data: Array<any> = FAKE_DATA;

    getAll() {
        //return this.data;
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }

    getById(id: number) {
        return new Promise((resolve, reject) => {
            for (let index in this.data) {
                let post = this.data[index];
                if (post.id === id) {
                    resolve(post);
                }
            }
        });
    }
}