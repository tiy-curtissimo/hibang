package com.theironyard.fullstack;


import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;

public class JerseyResourceConfig extends ResourceConfig {
	public JerseyResourceConfig() {
		this.register(new JacksonJsonProvider(HibernateObjectMapperFactory.create()));
		this.property(ServerProperties.BV_DISABLE_VALIDATE_ON_EXECUTABLE_OVERRIDE_CHECK, true);
		this.property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);
		this.packages(true, "com.theironyard.fullstack.controllers");
	}
}
