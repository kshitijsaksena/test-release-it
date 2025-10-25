import { Eta } from "eta";
// or use https://jsr.io/@bgub/eta

const eta = new Eta({
    autoEscape: false,
    useWith: true,
    tags: ['${', '}'],
    parse: { interpolate: '' },
    rmWhitespace: false,
    autoTrim: false
});

// Render a template

function format() {
    const template = "release version: v${version}";
    const context = {version: "1.0.0"};
    console.log(!context);
    console.log(context === null);
    console.log(!template);
    console.log(template === null);
    console.log(template.indexOf('${') === -1);
    if (!context || context === null || !template || template === null || template.indexOf('${') === -1) console.log(template);
    const res = eta.renderString(template, context );
    console.log(res);

}

format();