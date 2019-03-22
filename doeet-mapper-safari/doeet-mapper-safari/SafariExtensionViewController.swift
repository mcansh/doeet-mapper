//
//  SafariExtensionViewController.swift
//  doeet-mapper-safari
//
//  Created by Logan McAnsh on 3/22/19.
//  Copyright © 2019 Logan McAnsh. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
