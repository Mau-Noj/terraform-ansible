# ── DROPLET ────────────────────────────────────────────
resource "digitalocean_droplet" "web" {
  name   = "vaadin-server"
  region = var.region
  size   = var.droplet_size
  image  = "ubuntu-22-04-x64"

  ssh_keys = ["73:10:0b:6c:92:49:c8:91:77:c9:0d:ed:79:62:f5:7b"]
}

# ── FIREWALL ─────────────────────────────────────────
resource "digitalocean_firewall" "web" {
  name = "web-firewall"

  droplet_ids = [digitalocean_droplet.web.id]

  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
  protocol         = "tcp"
  port_range       = "8080"
  source_addresses = ["0.0.0.0/0", "::/0"]
}

  outbound_rule {
    protocol              = "tcp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}