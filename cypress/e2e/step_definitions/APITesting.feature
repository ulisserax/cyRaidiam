Feature: OpenWeather API Testing with latitude and longitude

  Scenario: Current weather data by latitude and longitude
    Given I request weather data for latitude 35 and longitude 139
    When the response status code should be 200
    Then the response should contain the weather information
    
  Scenario: Current weather data by city name
    Given I request weather data for city "London"
    When the response status code should be 200
    Then the response should contain the weather information
  
  Scenario: Current weather with different units of measurement
    Given I request weather data for city "London" with units "metric"
    When the response status code should be 200
    Then the response should contain the weather information

    Given I request weather data for city "London" with units "imperial"
    When the response status code should be 200
    Then the response should contain the weather information
  
  Scenario: Bad Request error
    Given I request weather data with invalid latitude and longitude
    Then the response should be incorrect and be 400
 
  Scenario: Unauthorized error
    Given I request weather data with an invalid API key
    Then the response status code should be 401

  Scenario: Not Found error
    Given I request weather data for a non-existent city
    Then the response status code should be 404

  Scenario: Internal Server Error (Simulated)
    Given I intercept weather data from an invalid endpoint
    When I request weather data from an invalid endpoint
    Then the simulated response status code should be 500

  # Scenario: Too Many Requests error
  #   Given I make too many requests in a short period
  #   Then the response status code should be 429