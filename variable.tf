variable "do_token" {
  description = "DigitalOcean API Token"
  sensitive   = true
}

variable "pvt_key" {
  description = "Ruta a tu llave privada SSH para que Ansible pueda entrar"
}

variable "region" {
  default = "nyc1"
}

variable "droplet_size" {
  default = "s-1vcpu-1gb"
}