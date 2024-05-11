# Remastery Problems

Now that you've solved the REPL Practice Problems, it is time to submit your
solutions.

1. Clone the starter from GitHub.
2. Copy and paste your solution for each problem into the appropriate file.
3. Run each file locally to make sure your functions are still returning the
   correct output. For example, to run the first file, run the following:
   `node 01-last-vowel.js`
4. `npm test` to run all specs
5. Your objective is to implement the functions in `/problems` to pass all specs

If you run into any issues cloning the practice, running your files, or zipping
up your submission, reach out to an instructor on Slack.

## Running the specs for each problem

To run specs only for a single problem, you can add the file location of the
test file that corresponds to the problem that you want to test. For example,
if you want to test the `problem/03-min-value.js` file only, you can run
`npm test test/03-min-value-spec.js`.

Here are commands to run each test file separately:

```sh
   npm test test/01-last-vowel-spec.js
   npm test test/02-remove-last-vowel-spec.js
   npm test test/03-min-value-spec.js
   npm test test/04-two-dimensional-sum-spec.js
   npm test test/05-reverse-string-spec.js
   npm test test/06-two-sum-spec.js
   npm test test/07-while-loop-translation-spec.js
   npm test test/08-for-loop-translation-spec.js
   npm test test/09-is-prime-spec.js
```

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. **Delete the `node_modules` directory**
3. Zip up your folder
4. Upload it
