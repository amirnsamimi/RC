## Intro

- stackblitz.com
- Alternatives: Codesandbox.io, replit.com, glitch.com, github.com/features/codespaces, codepen.io

## console:

The console object is available in any global scope.
check [can i use](https://caniuse.com/?search=console) before implementation.


- console.assert()
Log an error message to console if the first argument is false.

- console.clear()
Clear the console.

- console.count()
Log the number of times this line has been called with the given label.

- console.countReset()
Resets the value of the counter with the given label.

- console.debug()
Outputs a message to the console with the debug log level.

- console.dir()
Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

- console.dirxml()
Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

- console.error()
Outputs a message to the console with the error log level.

- console.exception() Non-standard Deprecated
An alias for console.error().

- console.group()
Creates a new inline group, indenting all following output by another level. To move back out a level, call console.groupEnd().

- console.groupCollapsed()
Creates a new inline group, indenting all following output by another level. However, unlike console.group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call console.groupEnd().

- console.groupEnd()
Exits the current inline group.

- console.info()
Outputs a message to the console with the info log level.

- #### console.log()
Outputs a message to the console:
  - to Style:
  ```bash
    console.log(
    "This is %cMy stylish message",
    "color: yellow; font-style: italic; background-color: blue;padding: 2px",
    );

  ```
  - String Substitution:
     - %o
    Outputs a JavaScript object in the "optimally useful formatting" style, for example DOM elements may be displayed the same way as they would appear in the element inspector.

    - %O
    Outputs a JavaScript object in the "generic JavaScript object formatting" style, usually in the form of an expandable tree. This is similar to console.dir().

    - %d or %i
    Outputs an integer.

    - %s
    Outputs a string.

    - %f
    Outputs a floating-point value.

    - %c
    Applies CSS style rules to all following text. See Styling console output.

  ```bash
    for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
    }
  ```

- console.profile() Non-standard
Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile.

- console.profileEnd() Non-standard
Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

- console.table()
Displays tabular data as a table.

- console.time()
Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

- console.timeEnd()
Stops the specified timer and logs the elapsed time in milliseconds since it started.

- console.timeLog()
Logs the value of the specified timer to the console.

- console.timeStamp() Non-standard
Adds a marker to the browser performance tool's timeline (Chrome or Firefox).

- console.trace()
Outputs a stack trace.

- console.warn()
Outputs a message to the console with the warning log level.


## prompt(input)

input should be string

## alert()

input should be string

