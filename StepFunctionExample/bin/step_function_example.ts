#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StepFunctionExampleStack } from '../lib/step_function_example-stack';

const app = new cdk.App();
new StepFunctionExampleStack(app, 'StepFunctionExampleStack');
