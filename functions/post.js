import { PostService } from '../lib/post-service';
import { client, headers } from '../lib/config';

const service = new PostService({ client });

exports.handler = async (event, context) => {
    console.log('Post service invoked');

    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' }
    }

    try {
        const posts = await service.GetPosts();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(posts)
        }
    } catch (error) {
        console.log('error', error)

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify(error),
        }
    }
}