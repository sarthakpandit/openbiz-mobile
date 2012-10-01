var OpenbizMo =
{
	init:function()
	{
		document.addEventListener('deviceready', OpenbizMo.checkConnection, false);
		document.addEventListener('online', OpenbizMo.checkDeviceOnline, false);
	},
	checkLocalCredential:function()
	{
		var db = window.openDatabase("openbiz_mobile","1.0","Openbiz Mobile",1000000);
		db.transcation( OpenbizMo.checkLogin,
						OpenbizMo.onLoginOnSucess,
						OpenbizMo.onLoginOnFaild);
	},
	checkLogin(tx):function()
	{
		tx.executeSql('SELECT * FROM config',);
	}
	checkConnection:function() {
		
	    var networkState = navigator.network.connection.type;
	    if( networkState==Connection.NONE || 
	    	networkState==Connection.UNKNOWN)
	    {
	    	$.mobile.changePage( "#lost_connection", { transition: "turn"} );
	    }
		
	},

	checkDeviceOnline:function(){
	
		if( networkState!=Connection.NONE && 
		    networkState!=Connection.UNKNOWN)
		    {
				location.href='index.html';
		    }
		
	}
}