module.exports = function plopGenerator(plop) {
  plop.setGenerator('component', {
    actions: [
      {
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
        type: 'add'
      },
      {
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'templates/props.ts.hbs',
        type: 'add'
      }
    ],
    description: 'application component logic',
    prompts: [
      {
        message: 'component name',
        name: 'name',
        type: 'input'
      }
    ]
  })
}
