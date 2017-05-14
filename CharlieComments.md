## Overview

This document covers the following assignments:

- **ReactProps**
- **ReactPropsRefine**
- **ReactPropsMounted**
- **ReactPropsShow**

## Client Side

This looks great.

Your CSS is well formed and your code is reasonably well structured.

Main Issues:

- Your work is in the **GitExplorer** folder.
- Your code runs without errors or warnings.
- I can see User, Foo and Numbers views.
- You retrieve data from the server
- You query the GitHub API
- You have a \_\_mocks\_\_ folder with a working **fetch** mock in it
- You created a field definitions file.
- You autogenerate the **form** controls with **ElfElements**.
- In **SmallNumbers**, you provide a view of  numbers. You might have added a few more.

You have properly refactored your code into the following files or something similar:

- ElfElements.js
- GetFoo.js
- GetUserInfo.js
- ElfHeader.js
- ShowUserInfo.js
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **.bowerrc** was **not** changed to include **bower-components**
- **index.js** is properly implemented  with **ElfHeader**, **GetUserInfo**, **App**/**GetFoo**, **SmallNumbers** in it.
- You do a good job of formatting your code.

## Testing

You have 19 working tests and they are refactored into 5 **modules**, at least approximately one per component.

Overall this is good, but you could have had a few more tests.

You might consider using and updating **ElfDebugEnzyme.js**. I'm not seeing much evidence that you got the Enzyme debug statements working. Without it, I take hours to fix my tests, with it, I usually fix the kind of tests we have been doing in seconds, or at most a few minutes.

## Commit Graded

Here is what I was looking at on branch **week04**:


```
commit 44220aa15718e396f19b52bccc6756cc1258a2e9
Author: Caleb-Home <caleb.mccann@bellevuecollege.edu>
Date:   Mon May 1 22:09:05 2017 -0700

    added output from npm start
```

If you feel this was the wrong commit, let me know.

## Create Charlie Branch for Comments

Here is how I created the branch where I place your comments. First I find the commit you want me to grade. Then I:


```bash
git branch charlie-props
git checkout charlie-props
touch CharlieComments.md
```

## Push Comments

Here is how I push that branch.


```bash
git add CharlieComments.md
git commit -m "CharlieComments for props assignments"
git push --set-upstream origin charlie-props
```

I provide a link to the comments, but if you can't find them, just go to your online repository, select the charlie-comment branch, and look for the file called **CharlieComments.md**.

## Comment Location

My comments are here:



And also attached, but easier to read through the above link to your repository.
