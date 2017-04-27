/**
 * Created by bcuser on 4/18/17.
 */
const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };

        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette',
                    avatar_url: 'avatart.com',
                    url: 'the url',
                    html_url: 'html url',
                    followers_url: 'folling url'
                })
            };

        default:
            return {}
    }
};

export default getData;