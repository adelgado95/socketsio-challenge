terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.31.0"
    }
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.12.1"
    }
  }
  required_version = ">= 0.13"
}

provider "google" {
  credentials = file("./.json")
  project     = "socketsiochallenge"
  region      = "us-west1"
}

