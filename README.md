# Rename-files-cli-tool
This is a quick CLI tool I created to remove keywords from a file's name.

For Example:

if the keyword is `min` and there's a file named `img-min.jpg` in the current directory, it'll be renamed to `img-.jpg`

Note: It'll only remove the first occurrence of the keyword from the filename.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      ie. in the previous example, if the filename were `img-min-min.jpg`, it'd be renamed to `img--.jpg`.

## Run:
```
node index
```
