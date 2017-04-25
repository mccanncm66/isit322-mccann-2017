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
                    userLogin: 'Robin Dudette',
                    avatar_url: 'waiting for data',
                    url: 'waiting for data',
                    html_url: 'waiting for data',
                    followers_url: 'waiting for data'
                })
            };

        default:
            return {}
    }
};

export default getData;