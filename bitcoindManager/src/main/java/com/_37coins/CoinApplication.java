package com._37coins;

import javax.ws.rs.core.Application;

import org.restlet.Context;
import org.restlet.Restlet;
import org.restlet.ext.jaxrs.InstantiateException;
import org.restlet.ext.jaxrs.JaxRsApplication;
import org.restlet.ext.jaxrs.ObjectFactory;
import org.restlet.routing.Router;
import org.restnucleus.filter.OriginFilter;

import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.assistedinject.Assisted;

public class CoinApplication extends JaxRsApplication {
	
	@Inject
	public CoinApplication(Application app,
			final Injector injector,
			@Assisted Context context) {
		super(context);
		this.add(app);
		
		this.setObjectFactory(new ObjectFactory() {
			@Override
			public <T> T getInstance(Class<T> jaxRsClass)
					throws InstantiateException {
				return injector.getInstance(jaxRsClass);
			}
		});
		// this.setGuard(...); // if needed
		// this.setRoleChecker(...); // if needed
	}
	
	@Override
	public Restlet createInboundRoot(){
		OriginFilter of = new OriginFilter(getContext());
		
		Router router = new Router(getContext());
		router.attachDefault(super.createInboundRoot());
		
		of.setNext(router);
		return of;
	}
}
