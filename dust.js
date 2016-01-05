'use strict';

/**
 * A Dust context helper
 **/
module.exports = function(obj) {
  return {
    object: obj,
    // Async write of the AS2 object out to Dust
    // {#json space="2"}
    json: function (chunk, context, bodies, params) {
      let options = {};
      if (params.space) {
        options.space = Number(params.space) || 2;
      }
      return chunk.map((inner_chunk)=> {
        obj.write(options, (err,doc)=> {
          if (err) {
            console.error(err);
            inner_chunk.end();
            return;
          }
          inner_chunk.write(doc);
          inner_chunk.end();
        });
      });
    }
  };
};
