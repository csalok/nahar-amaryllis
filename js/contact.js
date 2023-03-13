$(document).ready(function() {
    $('#contactus_side').click(function() {
        $('#recorderror_side').hide();
        $('#recorderror_side').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{8}/;
        var leadName = $('#side_name').val();
        var leadPhone = $('#side_phone').val();
        var leadEmail = $('#side_email').val();
        var leadMsg = $('#side_msg').val();
        var utmSource = queryParams.utm_source;
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        if (leadName == "") {
            $('#sideerror_name').show(0).delay(5000).hide(0);
            return false;
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $('#sideerror_mobile').show(0).delay(5000).hide(0);
            return false;
        } else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $('#sideerror_email').show(0).delay(5000).hide(0);
            return false;
        }
        $('#contactus_side').hide();
        $('.sidebuttonload').show();
        var leadPhone = itiSide.getNumber()
        var formData = {
            name: leadName,
            phone: leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "Website",
            extra: {
                message: leadMsg,
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
            },
        };
        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/20f0024bed8445b9aa3258e868909e83/af6bcdbc74bb4b4c831c8e249f35043b",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function(response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId: window.location = 'thank-you.html?leadId=' + leadId + "&" + window.location.href.slice(window.location.href.indexOf('?') + 1);
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function(error) {
            console.log(error);
            $('#error-wrap').html(error.responseJSON.error)
            $('#recorderror_side').html(error.responseJSON.error)
            $('#recorderror_side').show();
            $('#contactus_side').show();
            $('.sidebuttonload').hide();
            setTimeout(function() {
                $('#recorderror_side').html('')
                $('#recorderror_side').hide();
            }, 5000);
        });
    });

    $('#contactus_footer').click(function() {
        $('#recorderror_footer').hide();
        $('#recorderror_footer').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{8}/;
        var leadName = $('#footer_name').val();
        var leadPhone = $('#footer_phone').val();
        var leadEmail = $('#footer_email').val();
        var utmSource = queryParams.utm_source;
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        if (leadName == "") {
            $("#footer_name").addClass("error");
            $("#footer_name").on('keyup', function(e) {
                if ($(this).val().length != 0) {
                    $("#footer_name").removeClass("error");
                } else {
                    $("#footer_name").addClass("error");
                }
            });
            return false
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $("#footer_phone").addClass("error");
            $("#footer_phone").on('keyup', function(e) {
                if ($(this).val().length != 0) {
                    $("#footer_phone").removeClass("error");
                } else {
                    $("#footer_phone").addClass("error");
                }
            });
            return false
        } else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $("#footer_email").addClass("error");
            $("#footer_email").on('keyup', function(e) {
                if ($(this).val().length != 0) {
                    $("#footer_email").removeClass("error");
                } else {
                    $("#footer_email").addClass("error");
                }
            });
            return false
        }
        $('#contactus_footer').hide();
        $('.ftbuttonload').show();
        var leadPhone = itiFooter.getNumber()
        formData = {
            name: leadName,
            phone: leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "Website",
            extra: {
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
            },
        };
        var settings = {
            async: true,
            crossDomain: true,
            url: "https://lmsapi.persquarefeet.in/submit_lead/20f0024bed8445b9aa3258e868909e83/af6bcdbc74bb4b4c831c8e249f35043b",
            // url: "https://tesingwebhook.free.beeceptor.com",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function(response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId: window.location = 'thank-you.html?leadId=' + leadId + "&" + window.location.href.slice(window.location.href.indexOf('?') + 1);
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function(error) {
            console.log(error);
            $('#error-wrap').html(error.responseText.error)
            $('#recorderror_footer').html(error.responseJSON.error)
            $('#recorderror_footer').show();
            $('#contactus_footer').show();
            $('.ftbuttonload').hide();
            setTimeout(function() {
                $('#recorderror_footer').html('')
                $('#recorderror_footer').hide();
            }, 5000);
        });
    });

    $('#contactus_modal').click(function() {
        $('#recorderror_modal').hide();
        $('#recorderror_modal').html('');
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var filter = /[0-9]{9}/;
        var filterIN = /[0-9]{12}/;
        var leadName = $('#modal_name').val();
        var leadPhone = $('#modal_phone').val();
        var leadEmail = $('#modal_email').val();
        var leadMsg = $('#modal_msg').val();
        var utmSource = queryParams.utm_source;
        var utmMedium = queryParams.utm_medium;
        var utmCampaign = queryParams.utm_campaign;
        var utmTerm = queryParams.utm_term;
        var utmContent = queryParams.utm_content;
        var referrer = document.referrer;
        var userAgent = navigator.userAgent;
        var webUrl = document.baseURI;
        var leadPhone = itiModal.getNumber()
        var countryCode = leadPhone.slice(1,3)
        if (leadName == "") {
            $('#modalerror_name').show(0).delay(5000).hide(0);
            return false;
        } else if (leadPhone == "" || countryCode == 91 && !filterIN.test(leadPhone)) {
            $('#modalerror_mobile').show(0).delay(5000).hide(0);
            alert("filterIN")
            return false;
        } else if (leadPhone == "" || !filter.test(leadPhone)) {
            $('#modalerror_mobile').show(0).delay(5000).hide(0);
            alert("filter")
            return false;
        }else if (leadEmail != '' && !pattern.test(leadEmail)) {
            $('#modalerror_email').show(0).delay(5000).hide(0);
            return false;
        }
        $('#contactus_modal').hide();
        $('.modalbuttonload').show();
        
        var formData = {
            name: leadName,
            phone: leadPhone,
            email: leadEmail,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent,
            source: "Website",
            extra: {
                message: leadMsg,
                referrer: referrer,
                userAgent: userAgent,
                url: webUrl,
            },
        };
        var settings = {
            async: true,
            crossDomain: true,
            url: "https://testingwebhook.free.beeceptor.com",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            processData: false,
            data: JSON.stringify(formData)
        }
        $.ajax(settings).done(function(response) {
            var leadId = response.lms_id;
            if (queryParams.leadId == undefined) {
                (utmSource == undefined || utmSource == '') ? window.location = 'thank-you.html?leadId=' + leadId: window.location = 'thank-you.html?leadId=' + leadId + "&" + window.location.href.slice(window.location.href.indexOf('?') + 1);
            } else {
                var href = new URL(document.baseURI);
                href.searchParams.set('leadId', response.lms_id);
                var newUrl = href.toString().split('?')
                window.location = 'thank-you.html' + "?" + newUrl[1]
            }
            $('input').val('');
        }).fail(function(error) {
            console.log(error);
            $('#error-wrap').html(error.responseJSON.error);
            $('#recorderror_modal').html(error.responseJSON.error);
            $('#recorderror_modal').show();
            $('#contactus_modal').show();
            $('.modalbuttonload').hide();
            setTimeout(function() {
                $('#recorderror_modal').html('')
                $('#recorderror_modal').hide();
            }, 5000);
        });
    });
});
(jQuery);