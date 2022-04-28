using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.NetworkInformation;
using Spinger.Models;

namespace Spinger.Controllers
{
    [Route("[controller]/[Action]")]
    [ApiController]
    public class PingController : ControllerBase
    {
        [HttpPost]
        public IActionResult PingIPAddress([FromBody]string ip)
        {
            Ping pinger = null;
            PingResult result = new PingResult();
            try
            {
                pinger = new Ping();
                PingReply reply = pinger.Send(ip);
                result.Ip = ip;
                result.Status = reply.Status.ToString();
                result.Ttl = reply.Options.Ttl;
                result.Times = reply.RoundtripTime;
                result.Buffer = reply.Buffer.Length;
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
