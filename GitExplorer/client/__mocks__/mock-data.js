/**
 * Created by bcuser on 4/18/17.
 */
const getData = (url) => {
    switch (url) {
        case '/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };

        case '/gitapi/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    'login': 'Robin Dudette',
                    'id': '15935921',
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
        case '/gitapi/gists/get-basic-list':
            return {
                result: [
                    {
                        html_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                        id: 'a023c7db77926ff58d35087821e12020',
                        git_pull_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                        description: 'Simple React Component'
                    },
                    {
                        html_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac',
                        id: '17f8ec886c1ae22f66501fc3cbe760ac',
                        git_pull_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac.git',
                        description: 'React Npm Install'
                    }
                ]
            };

        default:
            return {}
    }
};

export default getData;