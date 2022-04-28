namespace Spinger.Models
{
    public class PingResult
    {
        public string Ip { get; set; }
        public string Status { get; set; }
        public int Buffer { get; set; }
        public long Times { get; set; }
        public int Ttl { get; set; }
    }
}
