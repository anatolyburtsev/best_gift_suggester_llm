from main import app

def lambda_handler(event, context):
    return app(event, context)
