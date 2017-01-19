package com.theironyard.fullstack;

import java.util.Properties;
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.SpringSessionContext;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

@Configuration
@EnableJpaRepositories(basePackages="com.theironyard.fullstack.persistence")
public class HibernateConfiguration {
	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("org.postgresql.Driver");
		dataSource.setUrl("jdbc:postgresql://127.0.0.1:5432/hibang");
		dataSource.setUsername("hibang");
		dataSource.setPassword("hibang");
		return dataSource;
	}
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setDataSource(dataSource());
		entityManagerFactoryBean.setPackagesToScan("com.theironyard.fullstack.models");
		entityManagerFactoryBean.setJpaProperties(buildHibernateProperties());
		entityManagerFactoryBean.setJpaProperties(new Properties() {{
			put("hibernate.current_session_context_class", SpringSessionContext.class.getName());
		}});
		entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter() {{
			setDatabase(Database.POSTGRESQL);
		}});
		return entityManagerFactoryBean;
	}
	
	protected Properties buildHibernateProperties() {
		Properties props = new Properties();
		props.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQL9Dialect");
		props.setProperty("hibernate.show_sql", "false");
		props.setProperty("hibernate.use_sql_comments", "false");
		props.setProperty("hibernate.format_sql", "false");
		props.setProperty("hibernate.hbm2ddl.auto", "false");
		props.setProperty("hibernate.generate_statistics", "false");
		props.setProperty("javax.persistence.validation.mode", "none");
		props.setProperty("org.hibernate.envers.store_data_at_delete", "true");
		props.setProperty("org.hibernate.envers.global_with_modified_flag", "true");
		return props;
	}
	
	@Bean
	public PlatformTransactionManager transactionManager() {
		return new JpaTransactionManager();
	}
	
	@Bean
	public TransactionTemplate transactionTemplate() {
		return new TransactionTemplate(transactionManager());
	}
}
