// Enums
enum Status {
  Queue,
  Progress,
  Cancelled,
  Completed,
}

enum Role {
  Contributor = "Contributor",
  ProjectManager = "Project Manager",
  Manager = "Manager",
  Lead = "Team Lead",
  Developer = "Developer",
  Designer = "Designer",
  SEO = "SEO",
  DigitalMarketing = "Digital Marketing"
}

export { Role, Status };