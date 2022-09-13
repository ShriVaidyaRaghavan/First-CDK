#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FirstCdkStack } from '../lib/first-cdk-stack';

const app = new cdk.App();
new FirstCdkStack(app, 'FirstCdkStack');
