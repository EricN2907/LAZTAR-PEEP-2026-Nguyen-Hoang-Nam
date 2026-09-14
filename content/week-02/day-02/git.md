+++
title = "Git & Version Control Notes"
weight = 1
+++

### 1. Differences Between `git fetch`, `git merge`, and `git pull`

| Concept | Definition | Working Mechanism | When to Use |
| :--- | :--- | :--- | :--- |
| **`git fetch`** | Downloads changes (commits, branches, tags) from a remote repository to your local machine but **does not automatically merge** them into your active branch. | Only updates the remote tracking branches (like `origin/main` or `origin/feature`). Your working directory remains untouched. | Use when you want to see what others have done before integrating it. Safe and clean. |
| **`git merge`** | Integrates commits from another branch into your current active branch. | Creates a merge commit if there are conflicts, or performs a Fast-forward merge if there is no branching. | Use after `git fetch` to merge tracked remote changes, or to merge a `feature` branch into `main`. |
| **`git pull`** | Fetches changes from a remote repository and **automatically merges** them into your current local branch. | It is a shortcut for: **`git fetch` followed by `git merge`** (by default) or **`git fetch` followed by `git rebase`** (if `--rebase` is configured). | Use when sure that local and remote branches do not have serious conflicts and want a quick update. |

#### Formula:
> **`git pull`** = **`git fetch`** + **`git merge`**

---

### 2. Guide to `git stash` Commands

`git stash` is used to temporarily shelf (stash) changes made to the working directory (both staged and unstaged) so that we can switch branches to work on something else without losing changes or making incomplete commits.

#### Stash Commands:

* **Stashing Changes:**
  ```bash
  # Stash all modifications with a message (Recommended)
  git stash save "Work in progress description"
  # Or using the newer push command
  git stash push -m "Description of changes"
  
  # Stash including untracked files
  git stash -u
  # Stash including ignored files in .gitignore
  git stash -a
  ```

* **Listing Stashes:**
  ```bash
  git stash list
  # Returns list in format: stash@{0}: On main: Work in progress description
  ```

* **Showing Stash Contents:**
  ```bash
  # Show summary of modified files in the latest stash
  git stash show
  # Show detailed code diff in a specific stash
  git stash show -p stash@{1}
  ```

* **Applying/Retrieving Stashed Code:**
  ```bash
  # Apply the latest stash and REMOVE it from the stash list
  git stash pop
  # Apply a specific stash (e.g., stash@{1}) and REMOVE it
  git stash pop stash@{1}
  
  # Apply the latest stash but KEEP it in the stash list
  git stash apply
  # Apply a specific stash and KEEP it
  git stash apply stash@{2}
  ```

* **Deleting Stashes:**
  ```bash
  # Delete a specific stash
  git stash drop stash@{0}
  # Delete all stashes
  git stash clear
  ```

* **Creating a Branch from a Stash:**
  ```bash
  # Create a new branch, apply stashed changes to it, and drop the stash
  git stash branch <new-branch-name> stash@{0}
  ```
