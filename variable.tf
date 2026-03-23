variable "do_token" {
  description = "DigitalOcean API Token"
  sensitive   = true
}

variable "region" {
  default = "nyc1"
}

variable "droplet_size" {
  default = "s-1vcpu-1gb"
}