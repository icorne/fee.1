import * as MyOtherScript from './my-other-script';

import sayHelloWorld from './my-other-script'

import {screamHelloWorld, default as sayHelloWorldAlias} from './my-other-script';


sayHelloWorld();

MyOtherScript['default']();

sayHelloWorldAlias();

screamHelloWorld();

MyOtherScript.screamHelloWorld();