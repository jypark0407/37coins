define({
    "email" : {
        "ResetSubject" : "Password Reset",
        "Reset" : "Please click this link to reset your password: {0}",
        "RegisterSubject" : "Email Verification",
        "Register" : "Please click this link to verify your email: {0}",
        "GatewayAlertSubject" : "Gateway offline",
        "GatewayAlert" : "Your 37coins gateway went offline a few minutes ago. Please restore operations. We will notify customers after an extended downtime.",
        "Byebye" : "행운을 빌어요,\r\n{0}"
    },
    "commands" : {
        "SignupCmd" : ["signupKO"],
        "HelpCmd" : ["도움,도움말"],
        "DepositReqCmd" : ["addr","주소,입금,입금하기","어드레스,어드래스"],
        "BalanceCmd" : ["잔액조회","잔액확인","계좌조회"],
        "TransactionsCmd" : ["업무"],
        "WithdrawalReqCmd" : ["송금","송금하기","이체"], // Mathan: Note to translators: The SEND command appears a lot in the rest of this file. Write down the relationship before translating, so you can refer to it later if there is not a proper translation elsewhere. 
        "VoiceCmd" : ["voice"],
        "ChargeCmd" : ["책임"],
        "ProductCmd" : ["생성물"],
        "PayCmd" : ["지불"],
        "PriceCmd" : ["가격"],
        "SellCmd" : ["판매"],
        "BuyCmd" : ["사기"]
    },
    "sms" : {
        "Signup" : "에 오신 것을 환영해요! 우리는 가장 간단한 글로벌 비트코인 전자지갑입니다 {0}",
        "DepositReq" : "{0}",
        "Charge" : "Payable through \"pay {0}\"",
        "Product" : "Payable through \"pay {0}\"",
        "DepositNotify" : "{0}mBTC{1} on the way to your wallet. Spendable in about 10 min, notify when complete.",
        "DepositConf" : "{0}mBTC이{1} 당신의 지갑에 입금되었습니다.",
        "DepositConfSndr" : "Received {0}mBTC{1} from {2}",
        "DepositConfSndrMsg" : "Received {0}mBTC{1} from {2} for \"{3}\"",
        "Balance" : "{0}mBTC{1} 이 지갑에 있습니다, {2}",
        "BalanceInst" : "\r\nReply ADDR, for Bitcoin address",
        "WithdrawalReq" : "당신의 지갑에서 {0}mBTC을{1} 주소 {2}로 송금하기를 요청하셨습니다.",
        "WithdrawalReqHelp" : "Please use SEND <amount> <phone no>\r\nEx: SEND 1.42USD 5558675309\r\n<amount>use XXUSD for US value, or just XX to indicate mili-bitcoin",
        "WithdrawalReqPay" : "Pay {0}mBTC{1} to {2} for {3}?",
        "WithdrawalReqIstr" : "확인을 위해 다음 코드를 입력하세요: {0}",
        "WithdrawalConf" : "당신의 지갑에서 {0}mBTC을{1} 주소 {2}로 송금하였습니다.",
	// Mathan - To Do: the line below needs to be translated again from its mate in the root "labels.js" file. Asked Song Yi.
        "Help" : "{0} 명령: 잔액조회, 주소, 송금/요청 <금액> <받는이> [서술], 확인 <언급>", 
        "Buy" : "Your number has been added as a buyer.",
        "FormatError" : "당신의 요청이 명확하지 않습니다. 메세지를 확인하시고 다시 요청하세요.",
        "InsufficientFunds" : "잔액부족! 균형:\r\n{0} mBTC, 이 필요합니다: {1} mBTC.,\r\nrequired {2}mBTC{3}.\r\nReply ADDR for Bitcoin deposit address",
        "UnknownCommand" : "You have sent an unknown command. Reply HELP or {0}",
        "Timeout" : "Confirmation response not received in time. Transaction canceled.",
        "TransactionFailed" : "Transaction failed due to an unknown reason.",
        "TransactionCanceled" : "거래는 취소되었습니다.",
        "Unavailable" : "{0} is currently unavailable, please try again in 1 hour.\r\n불편을 끼쳐 드려 죄송합니다.",
        "DestinationUnreachable" : "목적지에 도달 할 수없는했다: No reliable gateway found in the country you are trying to send to.",
        "BelowFee" : "이 거래는 전송 가치가 없다. Double-check the amount.",
        "AccountBlocked" : "계정이 차단됩니다",
        "Overuse" : "Your command was found redundant and skipped to prevent high cost.",
        "Voice" : "Security PIN activated successfully"
    },
    "voice" : {
        "VoiceHello" : "37 Coins, your global wallet.",
        "VoiceSetup" : "To secure large transactions, create a secret 4-digit PIN.",
        "VoiceCreate" : "Please enter a new 4-digit PIN, followed by the hash key.",
        "VoiceConfirm" : "Please reenter your new 4-digit PIN, followed by the hash key.",
        "VoiceMerchantConfirm" : "Please enter the 4-digit number, followed by the hash key.",
        "VoiceMismatch" : "The PIN does not match, please try again.",
        "VoiceSuccess" : "Please remember this PIN for future transactions.",
        "VoiceEnter" : "Please enter your 4-digit PIN, followed by the hash key.",
        "VoiceOk" : "The PIN is correct. Transaction executing.",
        "VoiceFail" : "The PIN is not correct. The account will be blocked after 3 failed attempts.",
        "VoiceRegister" : "Hello from 37 coins. Your verification-code is ${payload}. Please enter ${payload} to complete verification."
    }
});

//37Coins Resource bundle KOREAN
//A quick primer on JavaScript strings: http://www.quirksmode.org/js/strings.html
// - xxxCMD should not overlap with any other languages
//Author: SongYi Lee
//Editor: Nathan Basanese
