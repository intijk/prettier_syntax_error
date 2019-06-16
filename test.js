let prettier=require('prettier')


prettierOptions={ parser: 'babylon',
  singleQuote: true,
  semi: false,
  printWidth: 256,
  filepath: 'test.html' 
}

source=`
<!DOCTYPE html>
<html>
</html>
`

prettier.format(source, prettierOptions)
