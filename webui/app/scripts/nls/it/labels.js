define({
    "email" : {
        "ResetSubject" : "Password Reset",
        "Reset" : "Apri questo link per completare la procedura di password reset: {0}",
        "RegisterSubject" : "Verifica Email",
        "Register" : "Apri questo link per verificare il tuo indirizzo email: {0}",
        "GatewayAlertSubject" : "Gateway offline",
        "GatewayAlert" : "La tua Gateway 37coins andato offline a pochi minuti fa. Si prega di operazioni di ripristino. Vi informeremo i clienti, dopo un fermo prolungato.",
        "Byebye" : "Arrivederci a presto,\r\n{0}"
    },
    "commands" : {
        "SignupCmd" : ["signup"],
        "HelpCmd" : ["help"],
        "DepositReqCmd" : ["addr","deposit","address"],
        "BalanceCmd" : ["bal","balance"],
        "TransactionsCmd" : ["txns","transactions"],
        "WithdrawalReqCmd" : ["send","sending","sent"],
        "VoiceCmd" : ["voice"],
        "ChargeCmd" : ["req","request","charge"],
        "ProductCmd" : ["prod","product"],
        "PayCmd" : ["pay"],
        "PriceCmd" : ["price"],
        "SellCmd" : ["sell"],
        "BuyCmd" : ["buy"]
    },
    "sms" : {
        "Signup" : "Benvenuto in 37coins BETA! Bitcoin via SMS. Save this number, send commands to this gateway. Reply HELP for more info {0}",
        "DepositReq" : "{0}",
        "Charge" : "Pagare tramite il comando \"pay {0}\"",
        "Product" : "Payable through \"pay {0}\"",
        "DepositNotify" : "{0}{2}{1} on the way to your wallet. Spendable in about 10 min, notify when complete.",
        "DepositConf" : "Hai ricevuto {0}{2}{1}.",
        "DepositConfSndr" : "Hai ricevuto {0}{3}{1} da {2}.",
        "DepositConfSndrMsg" : "Hai ricevuto {0}{4}{1} da {2} for \"{3}\".",
        "Balance" : "Il tuo saldo attuale è: {0}{3}{1} {2}",
        "BalanceInst" : "\r\nReply ADDR, for Bitcoin address",
        "WithdrawalReq" : "Confermi l''invio {0}{3}{1} dal tuo account a {2}?",
        "WithdrawalReqHelp" : "Please use SEND <amount> <phone no>\r\nEx: SEND 1.42USD 5558675309\r\n<amount>use XXUSD for US value, or just XX to indicate mili-bitcoin",
        "WithdrawalReqPay" : "Pay {0}{4}{1} to {2} for {3}?",
        "WithdrawalReqIstr" : "Per confermare, rispondere con: {0}",
        "WithdrawalConf" : "Sono stati trasferiti {0}{3}{1} dal tuo account a {2}.",
        "Help" : "SEND limit: 10EUR before PIN setup\r\nComandi: bal, addr, send/request <quantitè> <beneficiario> [commento]\r\nADDR - Bitcoin deposit address\r\nBAL - see available balance\r\nPIN - setup PIN\r\n{0}",
        "Buy" : "Your number has been added as a buyer.",
        "FormatError" : "La tua richiesta non ha un formato riconosciuto. Rinviarla nuovamente nel formato corretto.",
        "InsufficientFunds" : "Fondi insufficienti:\r\nIl tuo saldo è {0}{4}{1},\r\ne occorrono {2}{4}{3}.",
        "UnknownCommand" : "Il comando inviato non è stato riconosciuto. Reply HELP o {0}",
        "Timeout" : "Non abbiamo ricevuto la conferma entro il tempo previsto. Transazione annullata.",
        "TransactionFailed" : "La transazione non è andata a buon fine per una ragione sconosciuta.",
        "TransactionCanceled" : "Transazione annullata.",
        "Unavailable" : "{0} is currently unavailable, please try again in 1 ora.\r\nCi scusiamo per l'inconveniente.",
        "DestinationUnreachable" : "Non sono stati trovati gateway nell''area con cui vuoi fare la transazione.",
        "BelowFee" : "Questo transazioni non vale la pena di invio. Doppio controllare il valore importo. Double-check the amount.",
        "AccountBlocked" : "Il tuo account è bloccato",
        "Overuse" : "Il tuo comando è stato registrato come ripetuto, pertanto è stato scartato per ridurre i costi della piattaforma.",
        "Voice" : "Security PIN attivato con successo"
    },
    "voice" : {
        "VoiceHello" : "37 Coins, il tuo global wallet.",
        "VoiceSetup" : "Per maggiore sicurezza, creare un codice PIN a 4 cifre.",
        "VoiceCreate" : "Per favore inserire un nuovo codice a 4 numeri, seguito dal tasto cancelletto.",
        "VoiceConfirm" : "Per favore inserire nuovamente il PIN scelto, seguito dal tasto cancelletto.",
        "VoiceMerchantConfirm" : "Per favore inserire il codice a 4 numeri, seguito dal tasto cancelletto.",
        "VoiceMismatch" : "Il PIN non corrisponde, per favore ripetere nuovamente.",
        "VoiceSuccess" : "Il PIN è stato memorizzato, sarà richiesto ad ogni transazione.",
        "VoiceEnter" : "Per favore inserire il codice PIN, seguito dal tasto cancelletto.",
        "VoiceOk" : "PIN Corretto, transazione in corso.",
        "VoiceFail" : "Il PIN è errato, l''account sarà bloccato al terzo tentativo.",
        "VoiceRegister" : "Benvenuto in 37Coins. Il tuo codice di verifica è ${payload}. Inserire il codice ${payload} per completare la procedura."
    }
});