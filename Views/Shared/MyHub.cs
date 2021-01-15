using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRTest.Views.Shared
{
    public class MyHub:Hub
    {
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }
    }
}