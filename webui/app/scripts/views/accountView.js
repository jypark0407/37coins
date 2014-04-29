define([
    'backbone',
    'hbs!tmpl/accountView_tmpl',
    'webfinger',
],
function(Backbone, AccountTmpl, webfinger) {
    'use strict';
    return Backbone.Marionette.ItemView.extend({
	template: AccountTmpl,
	className: 'static',
	initialize: function(opt){
	    console.log(opt.mobile);
	},
	handleJoin: function(e) {
	    e.preventDefault();
	    this.$('input.inside').button('loading');
	    var val = $('#searchInput').val();
	    var phoneUtil = window.i18n.phonenumbers.PhoneNumberUtil.getInstance();
	    var isValid = false;
	    var number;
	    try{
		number = phoneUtil.parseAndKeepRawInput(val);
		isValid = phoneUtil.isValidNumber(number);
	    }catch(err){
	    }
	    if (isValid) {
		var PNT = window.i18n.phonenumbers.PhoneNumberType;
		var numberType = phoneUtil.getNumberType(number);
		if (numberType === PNT.MOBILE || numberType === PNT.FIXED_LINE_OR_MOBILE) {
		    var PNF = window.i18n.phonenumbers.PhoneNumberFormat;
		    var strIntlNumber = phoneUtil.format(number, PNF.E164);
		    console.log(strIntlNumber);
		    var self = this;
		    $.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: window.opt.basePath+'/account/invite',
			data: JSON.stringify({mobile:strIntlNumber}),
			complete: function(data){
			    self.attempts = 0;
			    self.number = strIntlNumber.replace('+','');
			    self.submitInvite(data);
			},
			dataType: 'json'
		    });
		}else{
		    isValid = false;
		}
	    }
	    if (!isValid){
		this.$('#donate').empty();
		this.$('#donate').append('<p>Please enter a valid mobile number.</p>');
		this.$('input.inside').button('reset');
	    }

	},
	submitInvite: function(data){
	    var cn;
	    this.$('#donate').empty();
	    this.attemts += 1;
	    if (data.status===200 && this.attempts < 7){
		this.$('#donate').append('<p>Wallet created, delivering message...</p>');
		cn = this.number;
	    }else if (data.status===409){
		this.$('#donate').append('<p>Existing Wallet found, retrieving bitcoin address...</p>');
		cn = this.number;
	    }else if (data.status===404){
		this.$('#donate').append('<p>No gateway in this courtry yet, be the first one to <a href="#gateways">start it!</a></p>');
		this.$('button.btn-inverse').button('reset');
		return;
	    }else{
		this.$('#donate').append('<p>Some error occured, please leave a bug report.</p>');
		this.$('button.btn-inverse').button('reset');
		return;
	    }
	    if (cn && this.attempts < 7){
		var self = this;
		webfinger(cn+'@www.37coins.com', {
		    webfist_fallback: false,
		    tls_only: true,
		    uri_fallback: false,
		    debug: false
		}, function(err, p){
		    self.handleAddress(err,p);
		});
	    }
	},
	handleAddress: function(err,p){
	    this.$('button.btn-inverse').button('reset');
	    if (!err) {
		var data = JSON.parse(p.JRD).links[0].href.split(':')[1];
		this.$('#donate').append('<p><img id="'+data+'" width="200px;" src="https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=bitcoin:'+data+'&chld=H|0" /></p>');
		this.$('#donate').append( '<a href="bitcoin:'+data+'">bitcoin:'+data+'</a>');
		this.attemts = 0;
	    }else{
		this.submitInvite({status:200});
	    }
	}
    });
});