export default {
  includes: function (pass, buffer) {
    const tag       = pass.match(/<(\w*)>/)[1],
          hasOpen   = buffer.includes(`<${tag}>`),
          hasClosed = buffer.includes(`</${tag}>`);
    const valid = {
      pass: true
    };
    const invalid = {
      pass: false
    };
    return (hasOpen && hasClosed) ? valid : invalid;
  }
};
