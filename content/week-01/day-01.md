+++
title = "Day 01 - 15/06/2026"
weight = 1
+++

## Topics Learned

### Git

#### Common Commands

| Command            | Meaning                                        |
| ------------------ | ---------------------------------------------- |
| git init           | Create a new Git repository                    |
| git remote         | Manage connections to remote repositories      |
| git clone          | Copy a remote repository to the local machine  |
| git fetch          | Download remote changes without merging them   |
| git pull           | Download and merge remote changes              |
| git status         | Show the current repository state              |
| git branch         | List, create, or delete branches               |
| git switch         | Move to another branch                         |
| git checkout       | Switch branches or restore files               |
| git add            | Stage changes for the next commit              |
| git commit         | Save staged changes to the repository history  |
| git commit --amend | Update the latest commit                       |
| git push           | Upload local commits to a remote repository    |
| git reset          | Unstage changes or move commit history         |
| git rebase         | Reapply commits on top of another branch       |
| git rebase -i      | Edit, squash, or reorder commits interactively |
| git stash          | Temporarily save uncommitted work              |
| git stash pop      | Restore the latest stashed work                |
| git merge          | Combine changes from another branch            |
| git cherry-pick    | Apply a specific commit to the current branch  |

#### Merge Conflict Handling

| Situation                        | Solution in Code Source Control                                     |
| -------------------------------- | ------------------------------------------------------------------- |
| Keep changes from both branches  | Open the file, edit the conflict manually, then mark it as resolved |
| Keep the current branch version  | Use `Accept Current Change` in the conflict editor                  |
| Keep the incoming branch version | Use `Accept Incoming Change` in the conflict editor                 |
| Cancel the merge                 | Open Source Control, use the `...` menu, then choose `Abort Merge`  |
| Resolve conflicts manually       | Review the marked conflict blocks and keep the correct final code   |

---

#### Git Demo

---

##### `git init` — Create a new Git repository

Run `git init` inside the `demo-git` folder to initialize an empty Git repository. Git creates a `.git/` directory inside it.

![Figure 1 – git init creates an empty repo at D:/LazTar/demo-git](/images/day1/image1.png)

---

##### `git remote` — Manage connections to remote repositories

Call `git remote` with no remotes added yet → empty output. Then use `git remote add origin <url>` to add the remote, then call `git remote` again → `origin` appears.

![Figure 2 – git remote before and after adding origin](/images/day1/image2.png)

---

##### `git remote -v` — Show remote details

`git remote -v` displays the full fetch and push URLs for the `origin` remote.

![Figure 3 – git remote add origin and git remote -v](/images/day1/image3.png)
![Figure 4 – git remote -v showing fetch/push URLs](/images/day1/image4.png)

---

##### `git clone` — Copy a remote repository to the local machine

Run `git clone <url>` to download the entire repository from GitHub. Git automatically creates the `LAZTAR-PEEP-2026-Nguyen-Hoang-Nam/` folder inside `demo-git/`.

![Figure 5 – git clone downloads the repo to local machine](/images/day1/image5.png)

---

##### `git fetch` — Download remote changes without merging

**Demo flow:**

- **Figure 6**: Run `git log --oneline -3` — local has 3 latest commits, `HEAD` and `origin/main` are both at commit `f5373ea (Fix name)`, fully in sync.

![Figure 6 – git log --oneline -3: local is in sync with remote](/images/day1/image6.png)

- **Figure 7**: Create a new commit directly on GitHub named **"Add instructions for building production site"** (hash `2855f46`). The remote is now ahead of local.

![Figure 7 – GitHub has a new commit "Add instructions for building production site"](/images/day1/image7.png)

- **Figure 8**: After running `git fetch origin` → Git downloads the info and updates `origin/main` to `2855f46`. Run `git log main..origin/main --oneline` → see the new remote commit. Run `git diff main origin/main` → see the README changes. But the local `main` branch still does not have that commit.

![Figure 8 – git fetch origin: diff is visible but local is not yet merged](/images/day1/image8.png)

> **Conclusion:** `git fetch` only downloads tracking info — it does **not** automatically merge into the working branch.

![Figure 9 – git log --oneline -3 after fetch: local still at f5373ea, missing 2855f46](/images/day1/image9.png)

---

##### `git pull` — Download and merge remote changes

`git pull origin main` = `git fetch` + `git merge`. It downloads commit `2855f46` and merges it into local `main` immediately via **Fast-forward** (1 file changed, 1 insertion).

![Figure 10 – git pull origin main: Fast-forward, README.md updated](/images/day1/image10.png)

---

##### `git merge` — Combine changes from another branch

Run `git fetch` then `git merge origin/main` separately to merge manually. The result is the same as pull: Fast-forward, `README.md | 1 +`.

![Figure 11 – git fetch + git merge origin/main: manual Fast-forward](/images/day1/image11.png)

---

##### `git status` — Show the current repository state

After editing `content/week-01/day-01.vi.md` without staging, `git status` reports:
- `modified: content/week-01/day-01.vi.md` (unstaged)
- `Untracked files: static/images/day1/` (not tracked yet)

![Figure 12 – git status: modified file and untracked folder visible](/images/day1/image12.png)

---

##### `git commit` — Save staged changes to the repository history

After `git add .`, run `git commit -m "message"` → Git records the staged changes as a new commit in the history.

![Figure 13 – git status after pull: "nothing to commit, working tree clean"](/images/day1/image13.png)
![Figure 14 – git status is clean after committing](/images/day1/image14.png)

---

##### `git branch` — List, create, or delete branches

`git branch` lists all branches. The current branch is marked with `*` and highlighted. For example, `* feature/be-foundation-review` with other branches like `develop` and `main`.

![Figure 15 – git branch: lists branches, * marks the current one](/images/day1/image15.png)
![Figure 16 – git branch + git switch: list branches then switch to main](/images/day1/image16.png)

---

##### `git switch` — Move to another branch

`git switch <branch-name>` switches to another branch (modern syntax). For example `git switch main` → "Switched to branch 'main'".

![Figure 17 – git checkout: "Your branch is up to date with 'origin/main'"](/images/day1/image17.png)

---

##### `git checkout` — Switch branches or restore files

`git checkout` with no arguments → reports the current branch status. Use `git checkout <branch>` to switch branches, similar to `git switch`.

![Figure 18 – git checkout: "Your branch is up to date with 'origin/main'"](/images/day1/image18.png)

---

##### `git add` + `git commit` + `git push` — Core workflow combo

The complete workflow when working on a new branch:

```bash
git switch -c feature-demo      # create and switch to new branch
git add .                        # stage all changes
git commit -m "Add feature demo"
git switch main                  # go back to main
git add .
git commit -m "Update main content"
git push origin main             # push to remote
```

![Figure 19 – git switch -c, git add, git commit, git switch main, git push](/images/day1/image19.png)

---

##### `git commit --amend` — Update the latest commit

`git commit --amend -m "new message"` replaces the last commit. Example: old commit was `887d8aa (Add image)` → after amend it becomes `1d481b8 (Add 2 image)` — the **hash changes** but no extra commit is created.

```bash
git log --oneline -1              # see last commit: 887d8aa Add image
git commit --amend -m "Add 2 image"
git log --oneline -1              # new hash: 1d481b8 Add 2 image
```

![Figure 20 – git commit --amend: hash changes from 887d8aa to 1d481b8](/images/day1/image20.png)

---

##### `git reset` — Unstage changes or move commit history

`git reset --soft HEAD~1` removes the last commit from history but keeps the changes in the staged area. Example: commit `1d481b8 (Add 2 image)` is removed, `HEAD` moves back to `2855f46`. Then `git status` shows files still staged as "Changes to be committed".

```bash
git log --oneline -2              # see: 1d481b8 Add 2 image, 2855f46 Add instructions...
git reset --soft HEAD~1           # remove last commit, keep staged
git log --oneline -2              # HEAD is now 2855f46
git status                        # files are still staged (Changes to be committed)
```

![Figure 21 – git switch -c feature-demo + git add + git commit "Add feature demo"](/images/day1/image21.png)
![Figure 22 – git log + git reset --soft HEAD~1 + git log + git status](/images/day1/image22.png)

---

##### `git rebase` — Reapply commits on top of another branch

When `feature-demo` and `main` have diverged (each has their own commits), `git rebase main` reapplies the commits of `feature-demo` on top of `main`, creating a linear history.

**Before rebase** (figures 23–24): `feature-demo` branched off from `main` — two branches running in parallel.

![Figure 23 – git switch -c feature-demo + commit "Add feature demo": history starts diverging](/images/day1/image23.png)
![Figure 24 – Git graph diagram: main and feature-demo have diverged](/images/day1/image24.png)

**After rebase** (figure 25): Run `git switch feature-demo` then `git rebase main` → `feature-demo` history is replayed on top of `main`, now linear and clean.

```bash
git switch feature-demo
git rebase main
```

![Figure 25 – git rebase main: "Current branch feature-demo is up to date"](/images/day1/image25.png)

---

##### `git stash` — Temporarily save uncommitted work

`git stash` saves all in-progress changes into a temporary storage, leaving the working tree clean so you can switch branches or do other work without committing.

- **Figure 26**: After `echo "# WIP note" >> README.md`, run `git status` → shows `modified: README.md`. This is the state **before stashing**.

![Figure 26 – git status: README.md is modified before stash](/images/day1/image26.png)

- **Figure 27**: Run `git stash` → Git saves changes to stash (`Saved working directory... WIP on feature-demo`). Then `git stash pop` → changes are restored, `README.md` is `modified` again.

![Figure 27 – git stash + git stash pop: save then restore changes](/images/day1/image27.png)

---

##### `git rebase -i` — Edit, squash, or reorder commits interactively

`git rebase -i HEAD~3` opens an editor to squash, edit, drop, or reorder commits. Used to clean up history before pushing.

**Demo flow:**

- **Figure 28**: Create branch `rebase-demoo` and make 3 commits (`fix A`, `fix B`, `fix C`) to `README.md`. Run `git log --oneline -4` → shows 3 separate commits.

![Figure 28 – 3 commits fix A, fix B, fix C created on rebase-demoo](/images/day1/image28.png)

- **Figure 29**: `git log --oneline -4` on branch `rebase-demooo` — `HEAD` is `squash fix A B C` (already squashed), below are the original commits `fix C`, `fix B`, `fix A`.

![Figure 29 – git log after rebase -i: HEAD is "squash fix A B C"](/images/day1/image29.png)

- **Figure 30**: The Vim editor screen for `git rebase -i` — shows 3 `pick` lines for 3 commits. Change lines 2 and 3 from `pick` to `s` (squash) to merge them into the first commit.

![Figure 30 – git rebase -i editor: pick/squash 3 commits](/images/day1/image30.png)

---

##### `git cherry-pick` — Apply a specific commit to the current branch

`git cherry-pick <hash>` copies a specific commit from another branch and applies it to the current branch without merging the entire branch.

**Demo flow:**

- **Figure 31**: Switch to `main` then run `git cherry-pick a9c80b8` → commit `squash fix A B C` is copied to `main` with a new hash `1d93759`. Run `git log --oneline -3` → the commit appears on `main`.

```bash
git cherry-pick --skip             # cancel the previous cherry-pick attempt
git switch main                    # switch to main first
git cherry-pick a9c80b8            # copy commit from rebase-demooo
git log --oneline -3               # confirm the commit appears on main
```

![Figure 31 – git cherry-pick: "squash fix A B C" commit appears on main branch](/images/day1/image31.png)

---

### TypeScript

#### Interface vs Type

- Use `interface` when the main goal is to describe object structure and support inheritance.
- Use `type` when the shape is more complex, such as a union, tuple, primitive alias, or function type.
- Both are valid for object modeling, so choose the one that fits the use case and team convention.

#### Union Type

- A union type allows a value to have more than one possible type.
- It uses the `|` operator.

#### Omit Utility Type

- `Omit` creates a new type by removing one or more properties from an existing type.
- It is useful when reusing a model but hiding fields that are not needed.

#### Extends

- `extends` lets an interface inherit properties from another interface.
- It reduces duplication and keeps related types consistent.

---

### ESLint

#### Purpose of ESLint

- ESLint is a static analysis tool for JavaScript and TypeScript.
- It helps detect errors and warnings before runtime.
- It keeps code aligned with project conventions.

#### Common Errors and Warnings

- `no-unused-vars`: a variable is declared but not used.
- `no-undef`: a variable is used before it is defined.
- `react-hooks/rules-of-hooks`: React Hooks are used in the wrong place.
- `react-hooks/exhaustive-deps`: a `useEffect` dependency is missing.
- `no-magic-numbers`: a hard-coded number is used without clear meaning.

## Lessons Learned

- Avoid **"magic numbers"**.
- Do not commit `node_modules`.
- Understand the difference between merge and rebase.
- Use `git add <file>` instead of `git add .` when possible.

### Key Principles

- Organize `src/` by feature or by file type.
- Keep configuration files at the project root.
- Always add `node_modules/` and `dist/` to `.gitignore`.
- Use clear and descriptive folder names.
- Group related files together for easier navigation.
