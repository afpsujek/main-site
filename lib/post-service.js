import faunadb from 'faunadb';

const query = faunadb.query;

export class PostService {
    constructor(data) {
        this.client = data.client;
    }

    async GetPosts() {
        return new Promise((resolve, reject) => {
            this.client
            .query(query.Paginate(query.Match(query.Ref('indexes/all_posts'))))
            .then((resp) => {
                const postRefs = resp.data;
                const getAllPosts = query.Map(postRefs, query.Lambda(['ref'], query.Get(query.Var('ref'))));

                this.client.query(getAllPosts).then((ret) => {
                     resolve(ret)
                })
            })
            .catch((error) => {
                console.log('error', error);
                reject(error);
            })   
        })
    }
}