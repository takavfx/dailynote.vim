# dailynote.vim

Create DailyNote with structured path and from templates.

## Install

Installing with dein.vim, for example, set in toml like this.

```toml
[[plugins]]
repo = 'takavfx/dailynote.vim'
hook_add="""
let g:dailynote#datefmt = 'YYYY/YYYY-M/YYYY-M-d' " This is optional.
"""
```

## Introduction

Use this command in DialyNote project **_*ROOT*_ directory.

Read also [dailynote.txt](doc/dailynote.txt)

### Create/Open Daily Note

To Create(Open) dailynote, use this command:

```
:DialyNoteCreate
```

This command creates if time is 2023/3/5, '~/2023/2023-3/2023-3-5.md'

If you want to create 3 days before daily note, then use command with arg:

```
:DailyNoteCreate -3
```

This creates '~/2023/2023-3/2023-3-2.md'.

If creating file exists already, open that file into a buffer.

### Use template

Adding some template under a title, create `template.md` at the project root.

```
DailyNote (root)
  |-- 2022
  |-- 2023
  |-- template.md
```

If you set the template like below:

```markdown
## Today Working Tasks


## Next Working Tasks


## Today's comment


## Note


```

Then you get:

```markdown
# Daily Note: 2023-3-5.md

## Today Working Tasks


## Next Working Tasks


## Today's comment


## Note


```
