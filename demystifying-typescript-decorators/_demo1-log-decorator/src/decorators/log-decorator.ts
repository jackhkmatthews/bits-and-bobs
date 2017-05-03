//target: constructor function prototype of the class
//string: name of the thing we are decoratingm. In this case the function name.
//descriptor:
export default function log(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>) {

  let originalMethod = descriptor.value;

  //replacing function on which we are applying this decorator
  //with a new one that does extra stuff
  descriptor.value = function(...args: any[]) {

    //before
    console.log(`${key} method called with args: ${JSON.stringify(args)}`)

    //the original function to which we are applying this decorator invoked
    let result = originalMethod.apply(this, args);

    // after
    console.log(`${key} method return value: ${JSON.stringify(result)}`);

  };

  // returning the new function/wider object to replace the one we decorated
  return descriptor;
}
