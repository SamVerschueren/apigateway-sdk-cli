import test from 'ava';
import execFile from 'get-exec-file';

test('throw error if id is not provided', async t => {
	await t.throws(execFile('./cli.js'), /Please provide the API id/);
});

test('throw error if stage is not provided', async t => {
	await t.throws(execFile('./cli.js', ['--id', 'foo']), /Please provide the stage name/);
});
