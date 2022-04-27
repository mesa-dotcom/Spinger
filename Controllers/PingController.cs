using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.NetworkInformation;

namespace Spinger.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PingController : ControllerBase
    {
        [HttpPost]
        public IActionResult pingIp([FromBody]string ip)
        {
            Ping pinger = null;
            try
            {
                pinger = new Ping();
                PingReply reply = pinger.Send(ip);
                string result = "Ping to " + reply.Address.ToString() + " Successful" + " Response delay = " + reply.RoundtripTime.ToString() + " ms";
                return Ok(result);
            }
            catch (PingException)
            {
                return BadRequest();
            }
            finally
            {
                if (pinger != null)
                {
                    pinger.Dispose();
                }
            }

        }
    }
}
