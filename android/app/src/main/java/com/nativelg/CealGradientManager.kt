package com.nativelg

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

class CealGradientManager(private val reactApplicationContext: ReactApplicationContext):
    ViewGroupManager<CealGradientView>() {

    private val cealGradientView = "CealGradientView"

    override fun getName() = cealGradientView

    override fun createViewInstance(reactContext: ThemedReactContext): CealGradientView {
        return CealGradientView(reactContext)
    }

    @ReactProp(name = "colors")
    fun configureView(view: CealGradientView, color: ReadableArray) {
        view.configureViews(color)
    }
}