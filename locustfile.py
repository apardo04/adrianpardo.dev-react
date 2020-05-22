from locust import HttpUser, TaskSet, task, between
import json


class UserTasks(TaskSet):
	@task(3)
	def index(self):
		self.client.get("/")

	@task(2)
	def blogs(self):
		self.client.get("/blog")

	@task(1)
	def ecs(self):
		self.client.get("/blog/github-actions-aws-ecs")


class WebsiteUser(HttpUser):
	tasks = [UserTasks]
	wait_time = between(1, 5)