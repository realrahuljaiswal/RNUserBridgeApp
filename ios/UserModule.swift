//
//  UserModule.swift
//  RNUserBridgeApp
//
//  Created by Rahul Jaiswal on 30/12/25.
//

import Foundation
import React

@objc(UserModule)
class UserModule: NSObject {

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }

  // MARK: - Get Users List
  @objc(getUsers:skip:resolver:rejecter:)
  func getUsers(
    limit: NSNumber,
    skip: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {

    let urlString = "https://dummyjson.com/users?limit=\(limit)&skip=\(skip)"
    guard let url = URL(string: urlString) else {
      reject("INVALID_URL", "Invalid URL", nil)
      return
    }

    URLSession.shared.dataTask(with: url) { data, _, error in
      if let error = error {
        reject("API_ERROR", error.localizedDescription, error)
        return
      }

      guard let data = data else {
        reject("NO_DATA", "No data received", nil)
        return
      }

      do {
        let json = try JSONSerialization.jsonObject(with: data)
        resolve(json)
      } catch {
        reject("JSON_PARSE_ERROR", error.localizedDescription, error)
      }
    }.resume()
  }

  // MARK: - Get User By ID
  @objc(getUserById:resolver:rejecter:)
  func getUserById(
    userId: NSNumber,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {

    let urlString = "https://dummyjson.com/users/\(userId)"
    guard let url = URL(string: urlString) else {
      reject("INVALID_URL", "Invalid URL", nil)
      return
    }

    URLSession.shared.dataTask(with: url) { data, _, error in
      if let error = error {
        reject("API_ERROR", error.localizedDescription, error)
        return
      }

      guard let data = data else {
        reject("NO_DATA", "No data received", nil)
        return
      }

      do {
        let json = try JSONSerialization.jsonObject(with: data)
        resolve(json)
      } catch {
        reject("JSON_PARSE_ERROR", error.localizedDescription, error)
      }
    }.resume()
  }
}
