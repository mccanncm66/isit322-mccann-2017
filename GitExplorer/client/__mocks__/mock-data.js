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
                    'id': 15935921,
                    'avatar_url': 'https://avatars1.githubusercontent.com/u/15935921?v=3',
                    'gravatar_id': '',
                    'url': 'https://api.github.com/users/mccanncm66',
                    'html_url': 'https://github.com/mccanncm66',
                    'followers_url': 'https://api.github.com/users/mccanncm66/followers',
                    'following_url': 'https://api.github.com/users/mccanncm66/following{/other_user}',
                    'gists_url': 'https://api.github.com/users/mccanncm66/gists{/gist_id}',
                    'starred_url': 'https://api.github.com/users/mccanncm66/starred{/owner}{/repo}',
                    'subscriptions_url': 'https://api.github.com/users/mccanncm66/subscriptions',
                    'organizations_url': 'https://api.github.com/users/mccanncm66/orgs',
                    'repos_url': 'https://api.github.com/users/mccanncm66/repos',
                    'events_url': 'https://api.github.com/users/mccanncm66/events{/privacy}',
                    'received_events_url': 'https://api.github.com/users/mccanncm66/received_events',
                    'type': 'User',
                    'site_admin': false,
                    'name': 'Caleb McCann',
                    'company': null,
                    'blog': null,
                    'location': null,
                    'email': null,
                    'hireable': null,
                    'bio': null,
                    'public_repos': 4,
                    'public_gists': 0,
                    'followers': 0,
                    'following': 1,
                    'created_at': '2015-11-20T02:42:16Z',
                    'updated_at': '2017-04-22T06:01:05Z'
                })
            };

        default:
            return {}
    }
};

export default getData;