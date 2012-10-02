var OpenbizMo =
{
	init:function()
	{
		document.addEventListener('deviceready', OpenbizMo.checkConnection, false);
		document.addEventListener('online', OpenbizMo.checkDeviceOnline, false);
	},
	checkLocalCredential:function()
	{
	   
	},
	checkConnection:function() {
	    var networkState = navigator.network.connection.type;
	    console.log("Connection Status: "+networkState);
	    if( networkState==Connection.NONE || 
	    	networkState==Connection.UNKNOWN)
	    {
	    	$.mobile.changePage( "#lost-connection", { transition: "turn"} );
	    }
		
	},
	checkDeviceOnline:function(){
	
		if( networkState!=Connection.NONE && 
		    networkState!=Connection.UNKNOWN)
		    {
				location.href='index.html';
		    }
	},
	saveAndLogin:function()
	{
		if(!$('#account-setup-form').validate().element('#account-setup #server_uri')){
			return ;
		}
		
		server_uri = $('#account-setup #server_uri').val();
		username = $('#account-setup #username').val();
		password = $('#account-setup #password').val();
		
		//validate server address
		$.mobile.loading( 'show', {
			text: 'Validating Server Address',
			textVisible: true,
			theme: 'b',
			html: ""
		});
		remote_api = server_uri + '/ws.php/system/mobile/getserverinfo/?format=jsonp';
		$.ajax({
			url:remote_api,
			dataType: 'jsonp',
			jsonpCallback: 'jsonCallback',
	        contentType: "application/json",
	        type:'GET',
			success: function(result)
			{
				console.log(result.data.system_name);
				$.mobile.loading( 'hide' );
				window.localStorage.setItem('server_uri',	server_uri);
				window.localStorage.setItem('server_system_name',	result.data.system_name);
			}
		});
		
		
		window.localStorage.setItem('username',		username);
		window.localStorage.setItem('password',		password);
	}	
}