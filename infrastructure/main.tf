provider "aws" {
  region  = "eu-central-1"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema-tf"
    key     = "app-cinema.tf"
    region  = "eu-central-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Eldad Mamo"
  }
}
