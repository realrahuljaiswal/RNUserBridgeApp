//
//  UserModule.m
//  RNUserBridgeApp
//
//  Created by Rahul Jaiswal on 30/12/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(UserModule, NSObject)

RCT_EXTERN_METHOD(getUsers:(nonnull NSNumber *)limit
                  skip:(nonnull NSNumber *)skip
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getUserById:(nonnull NSNumber *)userId
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end

