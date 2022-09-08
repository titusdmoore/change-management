// Enums
enum Status {
  Progress = 1,
  Queue,
  Approved,
  Completed,
  WaitingApproval,
  Cancelled
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