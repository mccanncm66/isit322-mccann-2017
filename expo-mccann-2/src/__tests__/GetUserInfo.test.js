import React from 'react';
import ReactDOM from 'react-dom';
import ElfDebug from '../ElfDebug';
import ElfTest from '../ElfTestCreator';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebug(true);
const elfTester = new ElfTest();
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('My GetUserInfo test' , function() {

    function getDefault(id, value) {
        const wrapper = mount(<DataMaven />);
        const nineSign = <label className='ElfFormLabel' htmlFor={id}>{value}</label>;
        //elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });

    /*****************************login***********************************************************************/
    elfTester.labelTest('login', false);
    elfTester.defaultValueTest('login', 'login unknown', false);
    elfTester.clickedValueTest('login', 'Robin Dudette', false);
    /*****************************avatar_url******************************************************************/
    elfTester.labelTest('avatar_url');
    elfTester.defaultValueTest('avatar_url', 'avatar_url unknown');
    elfTester.clickedValueTest('avatar_url', 'https://avatars1.githubusercontent.com/u/15935921?v=3', false);
    /*****************************id****************************************************************************/
    elfTester.labelTest('id');
    elfTester.defaultValueTest('id', 'id unknown');
    elfTester.clickedValueTest('id', '15935921', false);
    /*****************************gravatar_id*********************************************************************/
    elfTester.labelTest('gravatar_id');
    elfTester.defaultValueTest('gravatar_id', 'gravatar_id unknown');
    elfTester.clickedValueTest('gravatar_id', 'N/A', false);
    /*****************************url************************************************************************/
    elfTester.labelTest('url');
    elfTester.defaultValueTest('url', 'url unknown');
    elfTester.clickedValueTest('url', 'https://api.github.com/users/mccanncm66', false);
    /*****************************html_url*********************************************************************/
    elfTester.labelTest('html_url');
    elfTester.defaultValueTest('html_url', 'html_url unknown');
    elfTester.clickedValueTest('html_url', 'https://github.com/mccanncm66', false);
    /*****************************followers_url******************************************************************/
    elfTester.labelTest('followers_url');
    elfTester.defaultValueTest('followers_url', 'followers_url unknown');
    elfTester.clickedValueTest('followers_url', 'https://api.github.com/users/mccanncm66/followers', false);
    /*****************************following_url*********************************************************************/
    elfTester.labelTest('following_url');
    elfTester.defaultValueTest('following_url', 'following_url unknown');
    elfTester.clickedValueTest('following_url', 'https://api.github.com/users/mccanncm66/following{/other_user}', false);
    /*****************************gists_url***************************************************************************/
    elfTester.labelTest('gists_url');
    elfTester.defaultValueTest('gists_url', 'gists_url unknown');
    elfTester.clickedValueTest('gists_url', 'https://api.github.com/users/mccanncm66/gists{/gist_id}', false);
    /*****************************starred_url******************************************************/
    elfTester.labelTest('starred_url');
    elfTester.defaultValueTest('starred_url', 'starred_url unknown');
    elfTester.clickedValueTest('starred_url', 'https://api.github.com/users/mccanncm66/starred{/owner}{/repo}', false);
    /*****************************subscriptions_url******************************************************/
    elfTester.labelTest('subscriptions_url');
    elfTester.defaultValueTest('subscriptions_url', 'subscriptions_url unknown');
    elfTester.clickedValueTest('subscriptions_url', 'https://api.github.com/users/mccanncm66/subscriptions', false);
    /*****************************organizations_url******************************************************/
    elfTester.labelTest('organizations_url');
    elfTester.defaultValueTest('organizations_url', 'organizations_url unknown');
    elfTester.clickedValueTest('organizations_url', 'https://api.github.com/users/mccanncm66/orgs', false);
    /*****************************organizations_url******************************************************/
    elfTester.labelTest('repos_url');
    elfTester.defaultValueTest('repos_url', 'repos_url unknown');
    elfTester.clickedValueTest('repos_url', 'https://api.github.com/users/mccanncm66/repos', false);
    /*****************************events_url******************************************************/
    elfTester.labelTest('events_url');
    elfTester.defaultValueTest('events_url', 'events_url unknown');
    elfTester.clickedValueTest('events_url', 'https://api.github.com/users/mccanncm66/events{/privacy}', false);
    /*****************************received_events_url******************************************************/
    elfTester.labelTest('received_events_url');
    elfTester.defaultValueTest('received_events_url', 'received_events_url unknown');
    elfTester.clickedValueTest('received_events_url', 'https://api.github.com/users/mccanncm66/received_events', false);
    /*****************************type******************************************************/
    elfTester.labelTest('type');
    elfTester.defaultValueTest('type', 'type unknown');
    elfTester.clickedValueTest('type', 'User', false);
    /*****************************site_admin******************************************************/
    elfTester.labelTest('site_admin');
    elfTester.defaultValueTest('site_admin', 'site_admin unknown');
    elfTester.clickedValueTest('site_admin', 'N/A', false);
    /*****************************name******************************************************/
    elfTester.labelTest('name');
    elfTester.defaultValueTest('name', 'name unknown');
    elfTester.clickedValueTest('name', 'Caleb McCann', false);
    /*****************************company******************************************************/
    elfTester.labelTest('company');
    elfTester.defaultValueTest('company', 'company unknown');
    elfTester.clickedValueTest('company', 'N/A', false);
    /*****************************blog******************************************************/
    elfTester.labelTest('blog');
    elfTester.defaultValueTest('blog', 'blog unknown');
    elfTester.clickedValueTest('blog', 'N/A', false);
    /*****************************location******************************************************/
    elfTester.labelTest('location');
    elfTester.defaultValueTest('location', 'location unknown');
    elfTester.clickedValueTest('location', 'N/A', false);
    /*****************************email******************************************************/
    elfTester.labelTest('email');
    elfTester.defaultValueTest('email', 'email unknown');
    elfTester.clickedValueTest('email', 'N/A', false);
    /*****************************hireable******************************************************/
    elfTester.labelTest('hireable');
    elfTester.defaultValueTest('hireable', 'hireable unknown');
    elfTester.clickedValueTest('hireable', 'N/A', false);
    /*****************************bio******************************************************/
    elfTester.labelTest('bio');
    elfTester.defaultValueTest('bio', 'bio unknown');
    elfTester.clickedValueTest('bio', 'N/A', false);
    /*****************************public_repos******************************************************/
    elfTester.labelTest('public_repos');
    elfTester.defaultValueTest('public_repos', 'public_repos unknown');
    elfTester.clickedValueTest('public_repos', 4, false);
    /*****************************public_gists******************************************************/
    elfTester.labelTest('public_gists');
    elfTester.defaultValueTest('public_gists', 'public_gists unknown');
    elfTester.clickedValueTest('public_gists', 'N/A', false);
    /*****************************followers******************************************************/
    elfTester.labelTest('followers');
    elfTester.defaultValueTest('followers', 'followers unknown');
    elfTester.clickedValueTest('followers', 'N/A', false);
    /*****************************following******************************************************/
    elfTester.labelTest('following');
    elfTester.defaultValueTest('following', 'following unknown');
    elfTester.clickedValueTest('following', 1, false);
    /*****************************created_at******************************************************/
    elfTester.labelTest('created_at');
    elfTester.defaultValueTest('created_at', 'created_at unknown');
    elfTester.clickedValueTest('created_at', '2015-11-20T02:42:16Z', false);
    /*****************************updated_at******************************************************/
    elfTester.labelTest('updated_at');
    elfTester.defaultValueTest('updated_at', 'updated_at unknown');
    elfTester.clickedValueTest('updated_at', '2017-04-22T06:01:05Z', false);

});
